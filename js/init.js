
$(document).ready(function(){

 
  $('.sidenav').sidenav();


  // Inicializacion del Slider
  $(document).ready(function(){
    $('.slider').slider({
      
    });
  });

  // Script para delizar card
  /* Variables Globales*/
  var titleCard = $(".title__card")
  //console.log(box)

  //box.hide().eq(0).show()
  

  /* Evento */
  titleCard.on("click",function(){
    /*
      box.each(function(){
        $(this).slideUp()
      })*/

      $(this).next().slideToggle("slow")  

  })

  /**************************************************  Scipt para Tabs *************************************************************/
  // Variable Globales
  var tabsCards = $(".tab_card")
  var list = $(".tabs__cont > ul > li")
  var enfUno = $("#tabs__cont")

  //console.log(list)
  tabsCards.hide().eq(0).show()
  list.eq(0).addClass("activo")

  list.click(function(){

    if($(this).hasClass("item__uno")){
      console.log("Tiene la clase uno")
      list.removeClass("activo")
      $(this).addClass("activo")
      tabsCards.hide().eq(0).show()
    }
      else if($(this).hasClass("item__dos")){
        console.log("Tiene la clase dos")
        list.removeClass("activo")
        $(this).addClass("activo")
        tabsCards.hide().eq(1).show()
      }
        else if($(this).hasClass("item__tres")){
          console.log("Tiene la clase tres")
          list.removeClass("activo")
          $(this).addClass("activo")
          tabsCards.hide().eq(2).show()

            }else if($(this).hasClass("item__cuatro")){
              console.log("Tiene la clase Ciatro")
              list.removeClass("activo")
              $(this).addClass("activo")
              tabsCards.hide().eq(3).show()
            }
              else if($(this).hasClass("item__cinco")){
                console.log("Tiene la clase Cinco")
                list.removeClass("activo")
                $(this).addClass("activo")
                tabsCards.hide().eq(4).show()
              }
      
    else{
      console.warn("no Tiene la Clase")
    }
    
  })



})

