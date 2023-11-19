// npm package: datatables.net-bs5
// github link: https://github.com/DataTables/Dist-DataTables-Bootstrap5

$(function() {
  'use strict';

  $(function() {
    $('#dataTableExample').DataTable({
      "aLengthMenu": [
        [10, 30, 50, -1],
        [10, 30, 50, "All"]
      ],
      "iDisplayLength": 10,
      "language": {
        search: ""
      }
    });
    $('#dataTableExample').each(function() {
      var datatable = $(this);
      // SEARCH - Add the placeholder for Search and Turn this into in-line form control
      var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
      search_input.attr('placeholder', 'Search');
      search_input.removeClass('form-control-sm');
      // LENGTH - Inline-Form control
      var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
      length_sel.removeClass('form-control-sm');
    });
  });


  var apiUrl = "https://localhost:7251/api/Users/GetAllUser"
  var table = document.getElementById('tableBody')
  const data =  fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Yêu cầu thất bại với mã lỗi: ${response.status}`);
        }
        return response.json();
      })
      .then(datas => {
        datas.forEach((data)=>{
          var add = `                      
          <tr>
          <td>${data.id}</td>
          <td>${data.fullName}</td>
          <td>${data.ofStatus}</td>
          <td>${data.liveAt}</td>
        </tr>`
          table.innerHTML += add
          console.log(data.id)
        })
      })
      .catch(error => {
        // Xử lý lỗi nếu có lỗi xảy ra
        console.error('Đã xảy ra lỗi:', error);
      });
});