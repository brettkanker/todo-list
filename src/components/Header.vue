<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
    <a class="navbar-brand brand-custom" href="#">Todo-List</a>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/todo">Todo</RouterLink>
            </li>
        </ul>
    </div>
    </nav>



    <RouterView />
</template>

<style scoped>
.nav-item {
    padding-right: 10px;
}



</style>