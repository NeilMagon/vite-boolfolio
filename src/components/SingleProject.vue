<script>
    export default {
        name: 'SingleProject',
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
                <p class="card-text">{{ projectInfo.summary }}</p>
            </div>
        </div>
    </div>
</template>