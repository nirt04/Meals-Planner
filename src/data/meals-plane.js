const initialData = {
    meals: {
      "meal-1": { id: "meal-1", content: "Oat & cottage pancakes", unitName: 'pancakes', imgSrc: 'https://images.eatthismuch.com/site_media/thmb/34809_erin_m_7ef5ba84-0c6f-40ee-8654-517227f8b1d1.png' },
      "meal-2": { id: "meal-2", content: "Nonfat yogurt", unitName: 'bowl',imgSrc: 'https://images.eatthismuch.com/site_media/thmb/473055_basic_bob_80a7757a-c736-41cc-9a73-b9194bf76ad6.png' },
      "meal-3": { id: "meal-3", content: "Apples and Almond Butter" , unitName: 'apple', imgSrc: 'https://images.eatthismuch.com/site_media/thmb/55276_erin_m_7c06a10c-7070-49bd-ae36-b5a913f4aaf9.png'},
      "meal-4": { id: "meal-4", content: "Cottage Cheese with Banana" , unitName: null, imgSrc: 'https://images.eatthismuch.com/site_media/thmb/331986_erin_m_778ac2b0-ec71-48da-b3c0-f7c81667d094.png'},
      "meal-5": { id: "meal-5", content: "Chicken club sandwich" , unitName: null, imgSrc:'https://images.eatthismuch.com/site_media/thmb/33493_erin_m_52104ea7-bf52-4fb4-9ca7-a5974632c0fa.png'},
      "meal-6": { id: "meal-6", content: "Peanut Butter and Carrots Snack" , unitName: null, imgSrc: 'https://images.eatthismuch.com/site_media/thmb/905944_Tahirah_Fo_Ferah_091669a7-37f8-42f3-bd4d-bb67a2479363.jpg'},
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "Breakfast",
        mealsIds: ["meal-1", "meal-2"]
      },
      "column-2": {
        id: "column-2",
        title: "Lunch",
        mealsIds: ["meal-3", "meal-4"]
      },
      "column-3": {
        id: "column-3",
        title: "Dinner",
        mealsIds: ["meal-5"]
      },
      "column-4": {
        id: "column-4",
        title: "Snack",
        mealsIds: ["meal-6"]
      }
    },
    columnOrder: ["column-1", "column-2", "column-3", "column-4"]
  };
  
  export default initialData;
  