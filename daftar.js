<script>
            document.addEventListener("DOMContentLoaded", function () {
                document.querySelectorAll("a.btn.btn-theme").forEach(function (el) {
                    if (el.textContent.trim() === "Daftar") {
                        el.href = "/register?referral_code=dgrtp&member=dgrtp"; 
                    }
                });
            });
        </script>
