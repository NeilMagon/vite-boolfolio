<script>
    export default {
        name: 'ProjectCard',
        props:{
            projectInfo: Object
        }
    }
</script>

<template>
    <div class="col my-2">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">{{ projectInfo.name }}</h3>
                <p class="card-text">{{ projectInfo.client_name }}</p>
                <p v-if="projectInfo.type"  class="card-text">{{ projectInfo.type.name }}</p>
                <p v-if="projectInfo.technologies" class="card-text">{{ projectInfo.technologies.name }}</p>
                <p v-if="projectInfo.summary" class="card-text">{{ projectInfo.summary }}</p>
                <router-link :to="{name: 'SingleProject', params: {'slug': projectInfo.slug}}" class="btn btn-primary">
                    Read more...
                </router-link>
            </div>
        </div>
    </div>
</template>