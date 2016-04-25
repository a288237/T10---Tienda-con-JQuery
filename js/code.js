$(document).ready(function(){
    $("button").click(function(){
      var producto = $("input[type='text']").val();
      var precio = $("input[type='number']").val();

      var renglon = $("<tr></tr>");
      var columnaArticulo = $("<td></td>").text(producto);
      var columnaPrecio = $("<td></td>").val(precio);
      var columnaEliminar = $("<button></button>").text("Eliminar");

      $(renglon).append(columnaArticulo, columnaPrecio, columnaEliminar);
      $("tbody").append(renglon);

      $(columnaEliminar).click(function(){
        var filaEliminar = $(this).parentNode;
        $("tbody").remove(filaEliminar);
      });

});
  // var totalCell = document.getElementById("total");
  // var total = Number(totalCell.innerHTML)  + precio1;
  // totalCell.innerHTML = total;
