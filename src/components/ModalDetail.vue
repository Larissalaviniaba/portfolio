<template>
    <v-dialog :model-value="show" @update:model-value="close" max-width="600px">
        <v-card class="bg-bgCard">
            <v-img :src="project.image" class="project-detail-image"></v-img>

            <v-card-title>{{ $t(project.title) }}</v-card-title>

            <v-card-subtitle>
                <v-chip v-for="(tag, index) in project.tags" :key="index" class="tag" outlined color="red">
                    {{ tag }}
                </v-chip>
            </v-card-subtitle>

            <v-card-text>
                <p>{{ $t(project.description) }}</p>
            </v-card-text>

            <v-card-actions>
                <v-btn @click="close">{{ $t('modalDetail.btn.close') }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        project: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        close() {
            this.$emit('update:show', false);
        },
    },
};
</script>

<style scoped>
.v-card {
    padding: 20px;
}

.project-detail-image {
    height: 200px;
    object-fit: cover;
    width: 100%;
}
</style>