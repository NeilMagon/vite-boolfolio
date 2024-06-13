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
                projects: [],
                currentPage: 1,
                nextPageUrl: null,
                prevPageUrl: null
            }
        },
        methods: {
            getProject(pageShow){
                axios.get('http://127.0.0.1:8000/api/projects',
                   { params: {
                        page: pageShow
                    }
                })
                .then((response) => {
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.nextPageUrl = response.data.results.next_page_url;
                    this.prevPageUrl = response.data.results.prev_page_url;
                });
            }
        },
        mounted() {
            this.getProject(this.currentPage);
        }
    }
</script>

<template>
    <h1>Project List</h1>
    <div class="row row-cols-3">
        <ProjectCard v-for="project in projects" :projectInfo="project"></ProjectCard>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-if="prevPageUrl" class="page-item">
                    <a class="page-link" @click="getProject(currentPage - 1)">Previous</a>
                </li>
                <li v-if="nextPageUrl" class="page-item">
                    <a class="page-link" @click="getProject(currentPage + 1)">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss">

</style>
