<template src="./CreateArticle.html"></template>

<script>
import Sidebar from './shared/Sidebar';
import Axios from 'axios';
import {Global} from '../Global';
import ArticleModel from '../models/Article.model';
import { required } from 'vuelidate/lib/validators';
import Swal from 'sweetalert';


export default {
    name: 'EditArticle',
    components: {
        Sidebar
    },
    data(){
        return {
            submitted: false,
            article: new ArticleModel('', '', null, ''),
            file: '',
            isEdit: true
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
    mounted() {
        var articleId = this.$route.params.id;
        this.getArticle(articleId);
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
                var url = Global.url + '/articles/article/' + this.article._id;
                Axios.put(url, this.article)
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
                                    'Artículo actualizado',
                                    'Artículo actualizado correctamente',
                                    'success'
                                )
                                
                                this.$router.push('/article/'+this.article._id);
                            }).catch( err => {
                                console.log(err.response.data);
                            })
                        }
                        else{
                            Swal(
                                'Artículo actualizado',
                                'Artículo actualizado correctamente',
                                'success'
                                )
                            this.$router.push('/article/'+this.article._id);
                        }                        
                    }
                }).catch( err => {
                    console.log(err.response.data);
                })
            }
        },
        getArticle(articleId){
            var url = Global.url + '/articles/article/'+ articleId;
            Axios.get(url)
            .then( res => {

                if(res.data.status === 'success'){
                    this.article = res.data.article
                    console.log(this.article);
                }
            }).catch( err => {
                console.log(err);
            })
        }
    }
}
</script>