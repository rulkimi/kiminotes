<script setup>
import PageLayout from '@/layout/PageLayout.vue';
import { PreviewBlock } from '@/components/templates';

import { getSubLinks } from '@/utils';

import { ref, onMounted } from 'vue';

const sublinks = ref([]);

onMounted(() => {
  sublinks.value = getSubLinks();
});

const pathFunctionCode = ref(`PATH(<ID_columnName>, <parent_columnName>)

// Example usage:
= PATH(Employee[EmployeeKey], Employee[ParentEmployeeKey])
`);

const earlierFunctionCode = ref(`EARLIER(<column>, <number>)

// Example usage:
= COUNTROWS(FILTER(ProductSubcategory, EARLIER(ProductSubcategory[TotalSubcategorySales]) < ProductSubcategory[TotalSubcategorySales])) + 1
`);
</script>

<template>
  <PageLayout :sublinks="sublinks">
    <template #subtitle>
      Understanding DAX Functions: PATH and EARLIER
    </template>

    <template #content>
      <div class="flex flex-col gap-4">
        <p>DAX provides powerful functions for analyzing and manipulating data within tables. Here’s an overview of the <span class="font-mono">PATH</span> and <span class="font-mono">EARLIER</span> functions:</p>
        
        <h3 class="text-lg font-bold sublink">Using the <span class="font-mono">PATH</span> Function</h3>
        <p>The <span class="font-mono">PATH</span> function generates a delimited text string with the identifiers of all the parents of the current identifier. It starts with the oldest parent and continues up to the current identifier.</p>
        <PreviewBlock :script-code="pathFunctionCode" file-name="PATH Function" />
        <p>Returns the current value of the specified column in an outer evaluation pass of the mentioned column.</p>

        <h3 class="text-lg font-bold sublink">Using the <span class="font-mono">EARLIER</span> Function</h3>
        <p>The <span class="font-mono">EARLIER</span> function allows you to retrieve the value of a column from an outer evaluation pass. This is especially useful for nested calculations where you need to use a certain value as input and perform calculations based on that input.</p>
        <PreviewBlock :script-code="earlierFunctionCode" file-name="EARLIER Function" />
        <p>The next evaluation level out is represented by 1; two levels out is represented by 2 and so on. When omitted, the default value is 1.</p>
        <p>Steps:</p>
        <ol class="ml-3">
          <li class="list-decimal"><span class="font-mono">EARLIER</span> gets the value of <span class="font-mono">TotalSubcategorySales</span> for the current row.</li>
          <li class="list-decimal"><span class="font-mono">FILTER</span> returns rows where <span class="font-mono">TotalSubcategorySales</span> is larger than the current <span class="font-mono">EARLIER</span> value.</li>
          <li class="list-decimal"><span class="font-mono">COUNTROWS</span> counts the rows and assigns that value plus 1 to the new calculated column.</li>
          <li class="list-decimal">This process repeats until the end of the table.</li>
        </ol>
      </div>
    </template>
  </PageLayout>
</template>
