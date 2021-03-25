<script>
    import Nav from '../components/Nav.svelte';

    export let segment;
</script>

<style>
    /*main {*/
    /*    position: relative;*/
    /*    background-color: red;*/
    /*    padding: 2em;*/
    /*    margin: 0 auto;*/
    /*    box-sizing: border-box;*/
    /*}*/
</style>


<div class="row" style="!important padding: 0px; !important margin:0px; ">
    <div class="col-2">
        <Nav {segment}/>
    </div>
    <div class="col-10">
        <main>
            <slot/>
        </main>
    </div>
</div>

