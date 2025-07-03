<script setup lang="ts">
import { cloneDeep } from 'lodash-es';
import { reactive, ref } from 'vue';

const data = ref([
    { id: 'AAA', name: '张三', age: 12 },
    { id: 'BBB', name: '李四', age: 18 },
    { id: 'CCC', name: '王五', age: 20 },
]);

const showLineNumberVar = ref(false);
const editingData = reactive({});
function showLineNumber() {
    showLineNumberVar.value = !showLineNumberVar.value;
}
function editCell(id: string) {
    editingData[id] = cloneDeep(data.value.filter((dataItem: any) => dataItem.id === id)[0]);
}



function cancel(id: string) {
    editingData[id] = null;
}

function save(id: string) {
    const foundData = data.value.filter((dataItem: any) => dataItem.id === id)[0];
    Object.keys(editingData[id]).forEach((columnKey: string) => {
        foundData[columnKey] = editingData[id][columnKey];
    });
    cancel(id);
}
</script>

<template>
    <div>
        <button @click="showLineNumber">切换显示行号</button>
        列模板:
        <h-virtual-table :data="data">
            <template #default="{ row }">
                <h-table-column id="id" name="标识">
                    <input type="text" v-model="editingData[row.id].id" v-if="editingData[row.id]">
                    <div v-else @click="editCell(row.id)">{{ row['id'] }}</div>
                </h-table-column>
                <h-table-column id="name" name="名称">
                    {{ row['name'] }}
                </h-table-column>
                <h-table-column id="age" name="年龄">
                    {{ row['age'] }}
                </h-table-column>
                <h-table-column id="operation" name="操作">
                    <button @click="save(row.id)">
                        保存
                    </button>
                    <button @click="cancel(row.id)">
                        取消
                    </button>
                </h-table-column>
            </template>
        </h-virtual-table>
    </div>
</template>

<style scoped></style>
