<script>
    import {meetingsPerDay,hourlyCost,schedulingTime,summarizeTime,clientOverTime,totalHoursSaved,costSavedPerMonth} from '$lib/stores.js';
</script>

<div class="flex justify-center items-center min-h-screen bg-gray-200 px-4">
  
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <div class="backdrop-blur-md bg-white/20 shadow-xl rounded-xl p-6 border border-white/30 w-80 text-center">
            <h3 class="text-lg font-medium text-gray-800">Meetings per Day</h3>
            <p class="text-2xl font-semibold text-blue-600">{$meetingsPerDay}</p>
            <input type="range" min="1" max="10" bind:value={$meetingsPerDay}
                class="w-full mt-2 appearance-none h-2 bg-gray-300 rounded-lg cursor-pointer accent-blue-600" />
        </div>

        <div class="backdrop-blur-md bg-white/20 shadow-xl rounded-xl p-6 border border-white/30 w-80 text-center">
            <h3 class="text-lg font-medium text-gray-800">Hourly Rate ($)</h3>
            <input type="number" bind:value={$hourlyCost} min="1"
                class="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-center">
        </div>

        <div class="backdrop-blur-md bg-yellow-100/20 shadow-xl rounded-xl p-6 border border-yellow-200/30 w-80 text-center">
            <p class="text-lg text-gray-700">Scheduling Time per Month</p>
            <p class="text-2xl font-semibold text-yellow-600">{$schedulingTime} hours</p>
        </div>

        <div class="backdrop-blur-md bg-purple-100/20 shadow-xl rounded-xl p-6 border border-purple-200/30 w-80 text-center">
            <p class="text-lg text-gray-700">Summarizing Time per Month</p>
            <p class="text-2xl font-semibold text-purple-600">{$summarizeTime} hours</p>
        </div>

        <div class="backdrop-blur-md bg-red-100/20 shadow-xl rounded-xl p-6 border border-red-200/30 w-80 text-center">
            <p class="text-lg text-gray-700">Client Over Time per Month</p>
            <p class="text-2xl font-semibold text-red-600">{$clientOverTime} hours</p>
        </div>

        <div class="backdrop-blur-md bg-blue-100/20 shadow-xl rounded-xl p-6 border border-blue-200/30 w-80 text-center">
            <p class="text-lg text-gray-700">Total Hours Saved per Month</p>
            <p class="text-2xl font-semibold text-blue-600">{$totalHoursSaved} hours</p>
        </div>
        <div class="backdrop-blur-md bg-green-100/20 shadow-xl rounded-xl p-6 border border-green-200/30 w-80 text-center col-span-full justify-self-center">
            <p class="text-lg text-gray-700">Total Savings per Month</p>
            <p class="text-3xl font-semibold text-green-600">${$costSavedPerMonth}</p>
        </div>
        
    </div>
</div>
