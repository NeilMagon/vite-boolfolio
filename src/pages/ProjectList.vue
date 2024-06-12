<script>
    import axios from 'axios';
    import ProjectCard from '../components/ProjectCard.vue';

    export default {
        name: 'ProjectList',
        components: {
            ProjectCard
        },
        data() {
            return {
                projects: []
            }
        },
        methods: {
            getProject(){
                axios.get('http://127.0.0.1:8000/api/projects')
                .then((response) => {
                    this.projects = response.data.results;
                });
            }
        },
        mounted() {
            this.getProject();
        }
    }
</script>

<template>
    <h1>Project List</h1>
    <div class="row row-cols-3">
        <ProjectCard v-for="project in projects" :projectInfo="project"></ProjectCard>
    </div>
</template>

<style scoped lang="scss">

</style>
