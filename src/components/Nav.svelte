<script>
    import NavTabs from '../components/Nav-tabs.svelte'
</script>

<style>
    .navigation-clean-search {
        background: #fff;
        padding-top: .75rem;
        padding-bottom: .75rem;
        color: #333;
        border-radius: 0;
        box-shadow: none;
        border: none;
        margin-bottom: 0;
    }

    @media (min-width:768px) {
        .navigation-clean-search {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    }

    .navigation-clean-search .navbar-brand {
        font-weight: bold;
        color: inherit;
    }

    .navigation-clean-search .navbar-brand:hover {
        color: #222;
    }

    .navigation-clean-search .navbar-toggler {
        border-color: #ddd;
    }

    .navigation-clean-search .navbar-toggler:hover, .navigation-clean-search .navbar-toggler:focus {
        background: none;
    }

    .navigation-clean-search .navbar-toggler {
        color: #888;
    }

    .navigation-clean-search .navbar-collapse, .navigation-clean-search .search-form {
        border-top-color: #ddd;
    }

    .navigation-clean-search .navbar-nav a.active, .navigation-clean-search .navbar-nav > .show > a {
        background: none;
        box-shadow: none;
    }

    .navigation-clean-search.navbar-light .navbar-nav a.active, .navigation-clean-search.navbar-light .navbar-nav a.active:focus, .navigation-clean-search.navbar-light .navbar-nav a.active:hover {
        color: #8f8f8f;
        box-shadow: none;
        background: none;
        pointer-events: none;
    }

    .navigation-clean-search.navbar .navbar-nav .nav-link {
        padding-left: 18px;
        padding-right: 18px;
    }

    .navigation-clean-search.navbar-light .navbar-nav .nav-link {
        color: #465765;
    }

    .navigation-clean-search.navbar-light .navbar-nav .nav-link:focus, .navigation-clean-search.navbar-light .navbar-nav .nav-link:hover {
        color: #37434d !important;
        background-color: transparent;
    }

    .navigation-clean-search .action-button, .navigation-clean-button .action-button:active {
        background: #56c6c6;
        border-radius: 20px;
        font-size: inherit;
        color: #fff !important;
        box-shadow: none;
        border: none;
        text-shadow: none;
        padding: 8px 20px;
        transition: background-color 0.25s;
    }

    .navigation-clean-search .action-button:hover, .navigation-clean-search .action-button:focus {
        background: #66d7d7;
    }

    .navigation-clean-search .search-form label {
        color: #ccc;
    }

    .navigation-clean-search .search-form .search-field {
        background: none;
        border: none;
        border-bottom: 1px solid transparent;
        border-radius: 0;
        color: #ccc;
        box-shadow: none;
        color: inherit;
        transition: border-bottom-color 0.3s;
    }

    @media (max-width:767px) {
        .navigation-clean-search .search-form .search-field {
            display: inline-block;
            width: 80%;
        }
    }

    .navigation-clean-search .search-form .search-field:focus {
        border-bottom: 1px solid #ccc;
    }
</style>

<nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
    <div class="container"><a class="navbar-brand" href="home/">OLA</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="myCourses/">My courses</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Market</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
            </ul>
            <form class="me-auto search-form" target="_self">
                <div class="d-flex align-items-center"><label class="form-label d-flex mb-0" for="search-field"><i class="fa fa-search"></i></label><input class="form-control search-field" type="search" id="search-field" name="search"></div>
            </form><a class="btn btn-light action-button" role="button" href="login/">Login</a>
            <a class="btn btn-light action-button" role="button" href="register/">Register</a>
        </div>
    </div>
</nav>
<NavTabs/>
