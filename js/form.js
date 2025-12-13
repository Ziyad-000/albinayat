/* ===================================
   Contact & Vendor Form Handling via Formspree
   =================================== */

document.addEventListener('DOMContentLoaded', function () {
    // قائمة بأسماء الفورم اللي في الموقع (تواصل + موردين)
    const formsIds = ['contactForm', 'vendorForm'];

    formsIds.forEach(function (id) {
        const form = document.getElementById(id);

        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault(); // منع التحديث

                const submitBtn = form.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.innerHTML;
                const formMessage = document.getElementById('formMessage'); // المكان اللي هنعرض فيه الرسالة

                // 1. حالة التحميل
                submitBtn.disabled = true;
                const isAr = (localStorage.getItem('language') === 'ar') || (document.documentElement.lang === 'ar');
                submitBtn.innerHTML = isAr ? '<i class="fas fa-spinner fa-spin"></i> جارِ الإرسال...' : '<i class="fas fa-spinner fa-spin"></i> Sending...';

                // 2. تجهيز البيانات (شامل الملفات)
                const data = new FormData(form);

                // 3. الإرسال
                fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        // نجاح
                        const successMessage = isAr
                            ? '<i class="fas fa-check-circle"></i> شكراً لك! تم استلام طلبك بنجاح وسيتم مراجعته قريباً.'
                            : '<i class="fas fa-check-circle"></i> Thank you! Your request has been received successfully.';

                        if (formMessage) {
                            formMessage.style.display = 'block';
                            formMessage.style.background = '#d4edda';
                            formMessage.style.color = '#155724';
                            formMessage.style.border = '1px solid #c3e6cb';
                            formMessage.innerHTML = successMessage;
                            // سكرول للرسالة عشان يشوفها
                            formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }

                        form.reset();
                    } else {
                        // فشل من السيرفر
                        response.json().then(data => {
                            if (Object.hasOwn(data, 'errors')) {
                                alert(data["errors"].map(error => error["message"]).join(", "));
                            } else {
                                throw new Error('Server error');
                            }
                        });
                    }
                }).catch(error => {
                    // خطأ اتصال
                    const errorText = isAr
                        ? 'عذراً، حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً.'
                        : 'Oops! There was a problem submitting your request.';

                    if (formMessage) {
                        formMessage.style.display = 'block';
                        formMessage.style.background = '#f8d7da';
                        formMessage.style.color = '#721c24';
                        formMessage.style.border = '1px solid #f5c6cb';
                        formMessage.innerHTML = errorText;
                    }
                }).finally(() => {
                    // 4. إرجاع الزرار
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;

                    // إخفاء الرسالة بعد 7 ثواني
                    setTimeout(() => {
                        if (formMessage) formMessage.style.display = 'none';
                    }, 7000);
                });
            });
        }
    });
});