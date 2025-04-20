<script>
    const transactions = [
        {
            amount: 100.5,
            description: "Grocery shopping",
            type: "EXPENSE",
            category: ["Food", "Essentials"],
            date: "2025-03-01T12:00:00.000Z"
        },
        {
            amount: 250,
            description: "Freelance payment",
            type: "INCOME",
            category: ["Work", "Client A"],
            date: "2025-03-02T15:30:00.000Z"
        },
        {
            amount: 45.99,
            description: "Netflix Subscription",
            type: "EXPENSE",
            category: ["Entertainment"],
            date: "2025-03-03T08:10:00.000Z"
        },
        {
            amount: 320,
            description: "Camera Gear Sale",
            type: "INCOME",
            category: ["Photography", "Selling"],
            date: "2025-03-04T11:45:00.000Z"
        },
        {
            amount: 15.75,
            description: "Bus Ticket",
            type: "EXPENSE",
            category: ["Transport"],
            date: "2025-03-05T07:20:00.000Z"
        },
        {
            amount: 89.99,
            description: "Dinner at restaurant",
            type: "EXPENSE",
            category: ["Food", "Leisure"],
            date: "2025-03-06T20:10:00.000Z"
        },
        {
            amount: 180,
            description: "Sold old furniture",
            type: "INCOME",
            category: ["Home", "Second-hand"],
            date: "2025-03-07T14:30:00.000Z"
        },
        {
            amount: 60,
            description: "Gym membership",
            type: "EXPENSE",
            category: ["Health", "Fitness"],
            date: "2025-03-08T09:00:00.000Z"
        },
        {
            amount: 500,
            description: "Project milestone bonus",
            type: "INCOME",
            category: ["Work", "Bonus"],
            date: "2025-03-09T18:25:00.000Z"
        },
        {
            amount: 23.45,
            description: "Movie ticket",
            type: "EXPENSE",
            category: ["Entertainment", "Leisure"],
            date: "2025-03-10T19:00:00.000Z"
        }
    ];

    function formatDateTime(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleString();
    }
</script>

<h1 class="text-xl font-bold mb-4">Transactions</h1>

<div class="overflow-x-auto">
    <table class="table table-zebra">
        <thead>
        <tr>
            <th>#</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Time</th>
        </tr>
        </thead>
        <tbody>
        {#each transactions as txn, index}
            <tr>
                <th>{index + 1}</th>
                <td>{txn.description}</td>
                <td>${txn.amount.toFixed(2)}</td>
                <td class="flex flex-wrap gap-1">
                    {#each txn.category as tag}
                        <span class="badge badge-outline badge-sm">{tag}</span>
                    {/each}
                </td>
                <td>{formatDateTime(txn.date)}</td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>
