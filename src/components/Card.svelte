<script>
    let items=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
</script>

<style>
    .contact-clean {
        background: #f1f7fc;
        padding: 80px 0;
    }

    @media (max-width:767px) {
        .contact-clean {
            padding: 20px 0;
        }
    }

    .contact-clean form {
        max-width: 480px;
        width: 90%;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 40px;
        border-radius: 4px;
        color: #505e6c;
        box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
    }

    @media (max-width:767px) {
        .contact-clean form {
            padding: 30px;
        }
    }

    .contact-clean h2 {
        margin-top: 5px;
        font-weight: bold;
        font-size: 28px;
        margin-bottom: 36px;
        color: inherit;
    }

    .contact-clean form .form-control {
        background: #fff;
        border-radius: 2px;
        box-shadow: 1px 1px 1px rgba(0,0,0,0.05);
        outline: none;
        color: inherit;
        padding-left: 12px;
        height: 42px;
    }

    .contact-clean form .form-control:focus {
        border: 1px solid #b2b2b2;
    }

    .contact-clean form textarea.form-control {
        min-height: 100px;
        max-height: 260px;
        padding-top: 10px;
        resize: vertical;
    }

    .contact-clean form .btn {
        padding: 16px 32px;
        border: none;
        background: none;
        box-shadow: none;
        text-shadow: none;
        opacity: 0.9;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px;
        letter-spacing: 0.4px;
        line-height: 1;
        outline: none !important;
    }

    .contact-clean form .btn:hover {
        opacity: 1;
    }

    .contact-clean form .btn:active {
        transform: translateY(1px);
    }

    .contact-clean form .btn-primary {
        background-color: #055ada !important;
        margin-top: 15px;
        color: #fff;
    }

    .card-group {
        display: inline-flex;
        /*grid-template-columns: repeat(auto-fill, 200px);*/
    }

    .card {
        width: 200px;
        height: 300px;
        left: 27px;
        top: 150px;
        margin: 10px !important;
        position: inherit;
        display: inline-block;
    }
</style>


{#each items as item}
    <div class="card">
        <img class="card-img-top w-100 d-block" src="http://www.kasparov.ru/content/materials/202012/5FDC9908CD6DB.jpg">
        <div class="card-body">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button class="btn btn-primary" type="button">Button</button>
        </div>
    </div>
{/each}
