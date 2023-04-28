import { getAllCategories } from "./httprequests.js";
let list = document.querySelector(".categories");
getAllCategories().then(data => {
    data.forEach(category => {
        list.innerHTML += `<li class="list-group-item d-flex justify-content-between">
         <span>${category.name}</span>
         <button class="btn btn-warning">Delete</button>
         </li>`
    });
    Array.from(list.children).forEach((item) => {
        let deleteButtons = list.children[1];
        deleteButtons.addEventListener("click", () => {
            // sweet alert
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-success'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            })
        })
    })
})