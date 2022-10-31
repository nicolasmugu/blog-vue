<template>
    <header id="header">
        <div class="center">
            <!-- LOGO -->
            <div id="logo">
                <img src="../../assets/logo.png" class="app-logo" alt="Logotipo" />
                <span id="brand">
                    <strong>Blog</strong>Vue
                </span>
            </div>
            
            <!-- MENU -->
            <nav id="menu">
                <ul>
                    <li>
                        <router-link active-class="active"  to="/home">Inicio</router-link>
                    </li>
                    <li>
                        <router-link active-class="active"  to="/blog">Blog</router-link>
                    </li>
                    <li>
                        <router-link active-class="active"  to="/formulario">Formulario</router-link>
                    </li>
                    <li>
                        <!-- Primera forma pasar paramtros -->
                        <!-- <router-link active-class="active"  to="/pagina/olmedo">Pagina 1</router-link> -->

                        <!-- Segunda forma pasar parametros -->
                        <router-link  active-class="active" :to="{ name: 'pagina', params: { id: 'Olmedo'}}">Pagina 1</router-link>
                    </li>
                    <li>
                        <router-link active-class="active"  to="/peliculas">Películas</router-link>
                    </li>                            
                </ul>
            </nav>

            <!--LIMPIAR FLOTADOS-->
            <div class="clearfix"></div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>