
            window.calcTax = function() {
                const base = parseFloat(document.getElementById('sal-base').value || 0);
                const res = document.getElementById('sal-res');
                const tax = base * 0.22;
                const med = base * 0.04;
                const net = base - tax - med;
                res.innerHTML = JSON.stringify({
                    "Gross Income": `$${base.toFixed(2)}`,
                    "Federal Income Tax (22%)": `-$${tax.toFixed(2)}`,
                    "Healthcare Deductions (4%)": `-$${med.toFixed(2)}`,
                    "Net Annual Take-Home": `$${net.toFixed(2)}`,
                    "Estimated Net Monthly": `$${(net/12).toFixed(2)}`
                }, null, 2);
            }
            calcTax();
        