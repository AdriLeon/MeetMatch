<script>
    document.addEventListener("DOMContentLoaded", function () {
        const imagenInput = document.getElementById("imagen");
        const imagenPrevia = document.getElementById("imagenPrevia");

        imagenInput.addEventListener("change", function () {
            const file = imagenInput.files[0];
            if (file) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    imagenPrevia.src = e.target.result;
                    imagenPrevia.style.display = "block";
                };

                reader.readAsDataURL(file);
            } else {
                imagenPrevia.src = "#";
                imagenPrevia.style.display = "none";
            }
        });
    });
</script>
