/*global define:false */
$.fn.filterPosts = function (options) {
        $("input[name$='radio']").click(function() {
            var test = $(this).val();
            console.log(test);
            if(test === "all"){
              $(".posts li").show();
            }else {
              $(".posts li").hide();
              $(".show" + test).show();
            }
          });
          // // get all of our list items
          // var itemsToFilter = document.querySelectorAll(".posts a");
          //
          // //setup click event handlers on our checkboxes
          // var checkBoxes = document.querySelectorAll(".filterSection li input");
          //
          // for (var i = 0; i < checkBoxes.length; i++) {
          //   checkBoxes[i].addEventListener("click", filterItems, false);
          //   checkBoxes[i].checked = true;
          // }
          //
          // $('.selectAll').click(function(event) {  //on click
          //   if(this.checked) { // check select status
          //     $(checkBoxes).each(function() { //loop through each checkbox
          //       this.checked = true;  //select all checkboxes with class "checkbox1"
          //       $(itemsToFilter).removeClass('hideItem');
          //     });
          //   }
          // });
          //
          // // the event handler!
          // function filterItems(e) {
          //   var clickedItem = e.target;
          //
          //   if (clickedItem.checked == true) {
          //       hideOrShowItems(clickedItem.value, "hideItem", "showItem");
          //   } else if (clickedItem.checked == false) {
          //       hideOrShowItems(clickedItem.value, "showItem", "hideItem");
          //       $('.selectAll').prop('checked', false);
          //
          //   } else {
          //
          //   }
          // }
          //
          // // add or remove classes to show or hide our content
          // function hideOrShowItems(itemType, classToRemove, classToAdd) {
          //   for (var i = 0; i < itemsToFilter.length; i++) {
          //       var currentItem = itemsToFilter[i];
          //
          //       if (currentItem.getAttribute("data-type") == itemType) {
          //           removeClass(currentItem, classToRemove);
          //           addClass(currentItem, classToAdd);
          //       }
          //   }
          // }
          //
          // //
          // // Helper functions for adding and removing class values
          // //
          // function addClass(element, classToAdd) {
          //   var currentClassValue = element.className;
          //
          //   if (currentClassValue.indexOf(classToAdd) == -1) {
          //       if ((currentClassValue == null) || (currentClassValue === "")) {
          //           element.className = classToAdd;
          //       } else {
          //           element.className += " " + classToAdd;
          //       }
          //   }
          // }
          //
          // function removeClass(element, classToRemove) {
          //   var currentClassValue = element.className;
          //
          //   if (currentClassValue == classToRemove) {
          //       element.className = "";
          //       return;
          //   }
          //
          //   var classValues = currentClassValue.split(" ");
          //   var filteredList = [];
          //
          //   for (var i = 0 ; i < classValues.length; i++) {
          //       if (classToRemove != classValues[i]) {
          //           filteredList.push(classValues[i]);
          //       }
          //   }
          //
          //   element.className = filteredList.join(" ");
          // }
};
