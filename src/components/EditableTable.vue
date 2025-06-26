<script setup lang="ts">
import { reactive, ref } from 'vue';

const data = ref([
    { id: 'AAA', name: '张三', age: 12 },
    { id: 'BBB', name: '李四', age: 18 },
    { id: 'CCC', name: '王五', age: 20 },
]);
const columns = ref([
    { key: 'id', name: '标识' },
    { key: 'name', name: '名称' },
    { key: 'age', name: '年龄' }
])
const showLineNumberVar = ref(false);
const editingData = reactive({});
function showLineNumber() {
    showLineNumberVar.value = !showLineNumberVar.value;
}
function editCell(row: any) {

}
</script>

<template>
    <div>
        <button @click="showLineNumber">切换显示行号</button>
        列模板:
        <h-virtual-table :data="data">
            <template #default="{ row }">
                <h-table-column id="id" name="标识">
                    <input type="text" v-if="editingData[row.id]">
                    <div v-else>{{ row['id'] }}</div>
                </h-table-column>
                <h-table-column id="name" name="名称">
                    {{ row['name'] }}
                </h-table-column>
                <h-table-column id="age" name="年龄">
                    {{ row['age'] }}
                </h-table-column>
            </template>
        </h-virtual-table>
    </div>
</template>

<style scoped></style>
