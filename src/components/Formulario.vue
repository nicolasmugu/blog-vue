<template>
    <div>
        <Slider texto="Ejercicios con Formulario"/>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Formulario</h2>

                <form class="mid-form" @submit.prevent="mostrarUsuario()">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" v-model="user.nombre"/>
                            <div v-if="submitted && !$v.user.nombre.required">
                                Este campo es requerido
                            </div>
                            <div v-if="submitted && !$v.user.nombre.minLength">
                                El nombre no es valido
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" v-model="user.apellidos"/>
                            <div v-if="submitted && !$v.user.apellidos.required">
                                Este campo es requerido
                            </div>
                            <div v-if="submitted && !$v.user.apellidos.minLength">
                                El apellido no es valido
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="bio">Biografia</label>
                            <textarea name="bio" v-model="user.bio"></textarea>
                            <div v-if="submitted && !$v.user.bio.required">
                                Este campo es requerido
                            </div>
                            <div v-if="submitted && !$v.user.bio.minLength">
                                La biografia no es valida
                            </div>
                        </div>

                        <div class="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" checked v-model="user.genero"/> Hombre 
                            <input type="radio" name="genero" value="mujer" v-model="user.genero"/> Mujer 
                            <input type="radio" name="genero" value="otro" v-model="user.genero" /> Otro
                        </div>

                        <div class="clearfix"></div>

                        <input type="submit" value="Enviar" class="btn btn-success" />

                   </form>
            </section>
            </div>
            <Sidebar/>        
        <div class="clearfix"></div>
    </div>
</template>

<script>
import Sidebar from './shared/Sidebar';
import Slider from './shared/Slider';
import { required, minLength } from 'vuelidate/lib/validators';



export default {
    name: 'Formulario',
    components: {
        Slider,
        Sidebar
    },
    validations: {
        user: {
            nombre: {
                required,
                minLength: minLength(3)
            },
            apellidos: {
                required,
                minLength: minLength(3)
            },
            bio: {
                required,
                minLength: minLength(10)
            },
        }
    },
    data(){
        return {
            submitted: false,
            user: {
                nombre: '',
                apellidos: '',
                bio: '',
                genero: ''
            }
        }
    },
    methods: {
        mostrarUsuario(){
            console.log(this.user);
            this.submitted = true;
        
            this.$v.$touch();
            if(this.$v.$invalid){
                return false;
            }
            alert('pasa validacion')
        }

    }
}
</script>