// ================================
// SCROLL SUAVE
// ================================
console.log("SCRIPT CARREGOU!");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});


// ================================
// MÁSCARA TELEFONE
// ================================

const phone = document.querySelector("#phone");

if(phone){

phone.addEventListener("input",(e)=>{

let value=e.target.value.replace(/\D/g,'');

if(value.length>11) value=value.slice(0,11);

if(value.length>10){

value=value.replace(/^(\d{2})(\d)(\d{4})(\d{4}).*/,"($1) $2 $3-$4");

}else if(value.length>6){

value=value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/,"($1) $2-$3");

}else if(value.length>2){

value=value.replace(/^(\d{2})(\d*)/,"($1) $2");

}

e.target.value=value;

});

}


// ================================
// FAQ
// ================================

document.querySelectorAll(".faq-toggle").forEach(btn=>{

btn.addEventListener("click",()=>{

const content=btn.nextElementSibling;

const icon=btn.querySelector("i");

content.classList.toggle("hidden");

if(icon){

icon.classList.toggle("rotate-180");

}

});

});


// ================================
// FORMULÁRIO
// ================================

const form=document.querySelector("#leadForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const nome=document.querySelector("#name")?.value || "";
const empresa=document.querySelector("#company")?.value || "";
const email=document.querySelector("#email")?.value || "";
const telefone=document.querySelector("#phone")?.value || "";
const servico=document.querySelector("#service")?.value || "";
const descricao=document.querySelector("#description")?.value || "";

if(nome==="" || telefone===""){

alert("Preencha os campos obrigatórios.");

return;

}

const mensagem=`
*Novo Lead - VM Software*

👤 Nome:
${nome}

🏢 Empresa:
${empresa}

📧 Email:
${email}

📱 WhatsApp:
${telefone}

💻 Serviço:
${servico}

📝 Projeto:
${descricao}
`;

const numero="5511932223533";

window.open(

`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,

"_blank"

);


// abre modal

const modal=document.querySelector("#successModal");

if(modal){

modal.classList.remove("hidden");

}

form.reset();

});

}


// ================================
// FECHAR MODAL
// ================================

const modal=document.querySelector("#successModal");

if(modal){

modal.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.add("hidden");

}

});

}

const close=document.querySelector("#closeModal");

if(close){

close.addEventListener("click",()=>{

modal.classList.add("hidden");

});

}



// ================================
// ANIMAÇÃO AO ROLAR
// ================================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});
