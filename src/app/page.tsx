export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <h1>RS Achievements</h1>
        <p>Tracking the hardest achievements in RuneScape.</p>
        <p>Coming Soon</p>
      </div>
    </>
  );
}

// Features I want to add:

// TODO: Greaper Total Unique Tracker w/Percentage
// TODO: 200m XP Tracker w/Percentage
// TODO: Party Hat Savings Tracker w/Percentage
// TODO: Ultimate Slayer Tracker w/Percentage

// NEXT STEPS:
// 1. Create a JSON file with boss log data:
//   - Populate the file with the necessary boss log data.

// 2. Create a routing page:
//   - Create a new file named `insane-reaper.tsx` in the `src/app` directory.
//   - Set up routing in your application to navigate to the `insane-reaper` page.

// 3. Create components:
//   - Create a `BossList.tsx` component to display the list of bosses.
//   - Create a `BossCard.tsx` component to display the details of each boss.

// 4. Fetch and display data:
//   - Fetch the boss log data from the JSON file in the `BossLog.tsx` page.
//   - Pass the data to the `BossList` component.
//   - Implement click functionality in `BossList` to display the `BossCard` component with the relevant boss details.

// 5. Style the components:
//   - Use Tailwind CSS to style the `BossList` and `BossCard` components for a consistent look and feel.
//  - Consider using "Tremor" Library for the design of the card.

// 6. Test the implementation:
//   - Ensure that clicking on a boss name displays the correct boss details in the `BossCard` component.
//   - Verify that the data is correctly fetched and displayed.
