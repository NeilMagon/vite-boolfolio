<script>
    import axios from 'axios';

    export default {
        name: 'SingleProject',
        data() {
            return {
                project: null
            };
        },
        methods: {
            getSingleProject(){
                axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
                .then((response) => {
                    this.project = response.data.results;
                });
            }
        },
        mounted() {
            this.getSingleProject()
        }
    }
</script>

<template>
    <div class="container">
        <div v-if="project">
            <h1>{{ project.name }}</h1>
            <div v-if="project.client_name"><strong>Client name</strong>: {{ project.client_name }}</div>
            <div v-if="project.type">
                <strong>Type</strong>: {{ project.type.name }}
            </div>

            <div v-if="project.technologies.length > 0">
                <strong>Technologies</strong>
                <div>
                    <div v-for="technology in project.technologies" class="badge rounded-pill text-bg-success">{{ technology.name }}</div>
                </div>
            </div>

            <div v-if="project.cover_image">
                <img :src="`http://127.0.0.1:8000/storage/${project.cover_image}`" :alt="project.name">
            </div>

            <p class="mt-5" v-if="project.summary">{{ project.summary }}</p>
        </div>
    </div>
</template>