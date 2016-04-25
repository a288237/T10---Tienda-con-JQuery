$(document).ready(function(){
    $("button").click(function(){
      var producto = $("input[type='text']").val();
      var precio = $("input[type='number']").val();

      var renglon = $("<tr></tr>");
      var columnaArticulo = $("<td></td>").text(producto);
      var columnaPrecio = $("<td></td>").text(precio);
      var columnaEliminar = $("<button></button>").text("Eliminar");

      $(columnaEliminar).click(function(){
        var filaEliminar = $(this).parentNode;
        $("tbody").remove(filaEliminar);
      });

      $(renglon).append(columnaArticulo, columnaPrecio, columnaEliminar);
      $("tbody").append(renglon);

    });

  });
  // var totalCell = document.getElementById("total");
  // var total = Number(totalCell.innerHTML)  + precio1;
  // totalCell.innerHTML = total;
