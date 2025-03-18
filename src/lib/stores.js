import { writable, derived } from "svelte/store";

export let meetingsPerDay = writable(1);
export let scheduleTime = writable(7);
export let sumUpTime = writable(5);
export let clientTime = writable(2);
export let totalTimeSaved = writable(15);
export let hourlyCost = writable(25);

export let schedulingTime = derived(
    [scheduleTime, meetingsPerDay], 
    ([$scheduleTime, $meetingsPerDay]) => $scheduleTime * $meetingsPerDay *10
);
export let summarizeTime = derived(
    [sumUpTime, meetingsPerDay], 
    ([$sumUpTime, $meetingsPerDay]) => $sumUpTime * $meetingsPerDay *10
);
export let clientOverTime = derived(
    [clientTime, meetingsPerDay], 
    ([$clientTime, $meetingsPerDay]) => $clientTime * $meetingsPerDay *10
);
export let totalHoursSaved = derived(
    [totalTimeSaved, meetingsPerDay], 
    ([$totalTimeSaved, $meetingsPerDay]) => $totalTimeSaved * $meetingsPerDay *10
);
export let costSavedPerMonth = derived(
    [hourlyCost, totalHoursSaved], 
    ([$hourlyCost, $totalHoursSaved]) => $hourlyCost * $totalHoursSaved
);


