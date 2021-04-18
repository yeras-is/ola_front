<script>
    let email= '';
    let password= '';

    const submit = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic b2xhLWNsaWVudDozZjFlMmVjMmY5MjQ0NTNmZmFlOTVhMDQ5Mjg3ZGIyNmMxMzZkOTBmMDEwYTgzOGYxNWVmNjgyOTcyYjE3YzU0");

        var formdata = new FormData();
        formdata.append("grant_type", "password");
        formdata.append("username", email);
        formdata.append("password", password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        await fetch("http://91.135.203.14:8080/ola/rest/v2/oauth/token", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
    }
</script>

<style>

</style>

<div>
    <section class="login-clean">
        <form on:submit|preventDefault={submit}>
            <div class="illustration">OLA App</div>
            <h2></h2>
            <div class="mb-3"><input bind:value={email} class="form-control" type="text" name="email" placeholder="Email"></div>
            <div class="mb-3"><input bind:value={password} class="form-control" type="password" name="password" placeholder="Password"></div>
            <div class="mb-3">
                <button class="btn btn-primary d-block w-100" type="submit">Log In</button>
            </div>
            <a class="forgot" href="#">Forgot your email or password?</a>
        </form>
    </section>
</div>