window.addEventListener("load",function(t){astrawpWooQuantityButtons(),quantityInput()});let astraminiCarttargetNodes=document.querySelectorAll(".ast-site-header-cart");function astrawpWooQuantityButtons(l){document.querySelector(".woocommerce div.product form.cart");l=l||".qty",$quantityBoxesWrap=document.querySelectorAll("div.quantity:not(.elementor-widget-woocommerce-cart .quantity):not(.buttons_added), td.quantity:not(.elementor-widget-woocommerce-cart .quantity):not(.buttons_added)");for(var t=0;t<$quantityBoxesWrap.length;t++){var e=$quantityBoxesWrap[t],a=e.querySelector(l);if(a&&"date"!==a.getAttribute("type")&&"hidden"!==a.getAttribute("type")){($qty_parent=a.parentElement).classList.add("buttons_added");var n=`<span class="screen-reader-text">${astra_qty_btn.minus_qty}</span><a href="javascript:void(0)" id="minus_qty-${t}" class="minus %s">-</a>`,r=`<span class="screen-reader-text">${astra_qty_btn.plus_qty}</span><a href="javascript:void(0)" id="plus_qty-${t}" class="plus %s">+</a>`;if("vertical-icon"===astra_qty_btn.style_type)$qty_parent.classList.add("ast-vertical-style-applied"),a.classList.add("vertical-icons-applied"),$qty_parent.insertAdjacentHTML("beforeend",n.replace("%s","ast-vertical-icon")+r.replace("%s","ast-vertical-icon"));else{let t="";"no-internal-border"===astra_qty_btn.style_type&&(a.classList.add("ast-no-internal-border"),t="no-internal-border"),$qty_parent.insertAdjacentHTML("afterbegin",n.replace("%s",t)),$qty_parent.insertAdjacentHTML("beforeend",r.replace("%s",t))}$quantityEach=document.querySelectorAll("input"+l+":not(.product-quantity)");for(var s=0;s<$quantityEach.length;s++){var o=$quantityEach[s],i=o.getAttribute("min");i&&0<i&&parseFloat(o.value)<i&&(o.value=i)}a=document.getElementsByTagName("BODY")[0],n=document.getElementsByClassName("cart")[0];if(a.classList.contains("single-product")&&!n.classList.contains("grouped_form")){let e=document.querySelector(".woocommerce input[type=number].qty");e&&e.addEventListener("keyup",function(){var t=e.value;e.value=t})}for(var u=e.querySelectorAll(".plus, .minus"),c=0;c<u.length;c++)u[c].addEventListener("click",function(t){var e,a=t.target.parentElement.querySelector(l),n=parseFloat(a.value),r=parseFloat(a.getAttribute("max")),s=parseFloat(a.getAttribute("min")),o=parseFloat(a.getAttribute("step")),i=Number.isInteger(o),r=(n&&""!==n&&"NaN"!==n||(n=0),""!==r&&"NaN"!==r||(r=""),""!==s&&"NaN"!==s||(s=0),"any"!==o&&""!==o&&void 0!==o&&"NaN"!==o||(o=1),t.target.classList.contains("plus")?r&&(r==n||r<n)?a.value=r:(e=n+parseFloat(o),a.value=i?e:e.toFixed(1)):s&&(s==n||n<s)?a.value=s:0<n&&(e=n-parseFloat(o),a.value=i?e:e.toFixed(1)),new Event("change",{bubbles:!0})),u=(a.dispatchEvent(r),document.getElementsByName("update_cart"));if(0<u.length)for(var c=0;c<u.length;c++)u[c].disabled=!1,u[c].click();s=a.value,n=a.getAttribute("name").replace(/cart\[([\w]+)\]\[qty\]/g,"$1");sendAjaxQuantityRequest(t.currentTarget,s,n)},!1)}}}function sendAjaxQuantityRequest(t,a,n){let r=t.closest(".woocommerce-mini-cart");if(r&&astra&&astra.single_product_qty_ajax_nonce&&astra.ajax_url){t=astra.single_product_qty_ajax_nonce;r.classList.add("ajax-mini-cart-qty-loading");let e=new XMLHttpRequest;e.open("POST",astra.ajax_url,!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send("action=astra_add_cart_single_product_quantity&hash="+n+"&quantity="+a+"&qtyNonce="+t),e.onload=function(){var t;e.readyState==XMLHttpRequest.DONE&&(200<=e.status||400<=e.status)&&((t=document.createEvent("HTMLEvents")).initEvent("wc_fragment_refresh",!0,!1),document.body.dispatchEvent(t),setTimeout(()=>{r.classList.remove("ajax-mini-cart-qty-loading")},500))}}}astraminiCarttargetNodes.forEach(function(t){var e;null!=t&&(e={attributes:!1,childList:!0,subtree:!0},new MutationObserver(()=>{astrawpWooQuantityButtons(),quantityInput()}).observe(t,e))}),jQuery(function(t){t(document.body).on("wc_fragments_refreshed",function(){astrawpWooQuantityButtons(),quantityInput()})}),setTimeout(()=>{var t=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(){return this.addEventListener("load",function(){astrawpWooQuantityButtons()}),t.apply(this,arguments)}},2e3);let typingTimer,doneTypingInterval=500;function quantityInput(){document.querySelector(".woocommerce-mini-cart")&&document.querySelectorAll(".input-text.qty").forEach(t=>{t.addEventListener("keyup",a=>{clearTimeout(typingTimer),t.value&&(typingTimer=setTimeout(()=>{var t=a.target.value,e=a.target.getAttribute("name").replace(/cart\[([\w]+)\]\[qty\]/g,"$1");t&&sendAjaxQuantityRequest(a.target,t,e)},doneTypingInterval))})})}