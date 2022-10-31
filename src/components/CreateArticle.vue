<template src="./CreateArticle.html"></template>

<script>
import Sidebar from './shared/Sidebar';
import Axios from 'axios';
import {Global} from '../Global';
import ArticleModel from '../models/Article.model';
import { required } from 'vuelidate/lib/validators';
import Swal from 'sweetalert';


export default {
    name: 'CreateArticle',
    components: {
        Sidebar
    },
    data(){
        return {
            submitted: false,
            article: new ArticleModel('', '', null, ''),
            file: '',
            isEdit: false
        }
    },
    validations:{
        article: {
            title: {
                required
            },
            content: {
                required
            }
        }
    },
    methods: { 
        fileChange(){
            this.file = this.$refs.file.files[0];            
        },       
        saveArticle(){                     
            this.submitted = true;  

            this.$v.$touch();
            if(this.$v.$invalid){
                return false;
            }
            else{                
                var url = Global.url + '/articles';
                Axios.post(url, this.article)
                .then( res => {
    
                    if(res.data.status === 'success'){

                        //subida de la imagen
                        if(this.file != null && this.file != undefined && this.file != ''){
                            const formData = new FormData();
                            formData.append('image', this.file, this.file.name);
    
                            var urlImg = Global.url + '/articles/upload-image/' + res.data.article._id;
                            Axios.post(urlImg, formData)
                            .then( res =>{

                                console.log(res);
                                Swal(
                                    'Artículo creado',
                                    'Artículo creado correctamente',
                                    'success'
                                )
                                
                                this.$router.push('/blog');
                            }).catch( err => {
                                console.log(err.response.data);
                            })
                        }
                        else{
                            Swal(
                                'Artículo creado',
                                'Artículo creado correctamente',
                                'success'
                                )
                            this.$router.push('/blog');
                        }                        
                    }
                }).catch( err => {
                    console.log(err.response.data);
                })
            }
        }
    }
}
</script>