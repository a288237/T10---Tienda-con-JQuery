$(document).ready(function(){
    $("button").click(function(){
      var producto = $("input[type='text']").val();
      var precio = $("input[type='number']").val();

      var renglon = $("<tr></tr>");
      var columnaArticulo = $("<td></td>").text(producto);
      var columnaPrecio = $("<td></td>").text(precio);
      var columnaEliminar = $("<button class='btn btn-danger'></button>");
      var eliminar = $("<i class='fa fa-trash-o fa-fw'></i>");

      $(columnaEliminar).click(function(){
        var filaEliminar = $(this).parentNode;
        $(renglon).remove(filaEliminar);
        total();
      });

      function total(){
        var total = 0;
        // Se lee cada una de las filas.
        $("table tbody tr").each(function() {
            total += Number($(this).find("td:nth-child(2)").text());
        });

        $("#total").text(total.toFixed(2));
      }

      total();
      $(columnaEliminar).append(eliminar);
      $(renglon).append(columnaArticulo, columnaPrecio, columnaEliminar);
      $("tbody").append(renglon);

    });

  });
