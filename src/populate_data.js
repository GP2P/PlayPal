// if empty, populate local storage with data

// add currentConversationID
if (!localStorage.getItem('currentConversationID')) {
	localStorage.setItem('currentConversationID', 'conv_1');
}

// add latestConversationID
if (!localStorage.getItem('latestConversationID')) {
	localStorage.setItem('latestConversationID', 'conv_2');
}

// add game_list

// {
// 	"game_list": [
// 		{
// 			"Game_Name": "Minecraft",
// 			"Last_Played": "Apr 4, 2024",
// 			"Icon_Url": ""
// 		},
// 		{
// 			"Game_Name": "Apex Legends",
// 			"Last_Played": "Mar 23, 2024",
// 			"Icon_Url": ""
// 		}
// 	]
// }
if (!localStorage.getItem('game_list')) {
	localStorage.setItem('game_list', JSON.stringify({
		"game_list": [{
			"Game_Name": "Minecraft", "Last_Played": "2024-04-03T18:25:43.511Z", "Icon_Url": ""
		}, {
			"Game_Name": "Apex Legends", "Last_Played": "2024-03-23T12:13:39.231Z", "Icon_Url": ""
		}]
	}));
}

// add persona_list

// {
// 	"persona_list": [
// 		{
// 			"Persona_Name": "Girlfriend",
// 			"Last_Chat": "Jan 23, 2023",
// 			"Icon_Url": ""
// 		},
// 		{
// 			"Persona_Name": "Best Friend",
// 			"Last_Chat": "Mar 29, 2024",
// 			"Icon_Url": ""
// 		}
// 	]
// }
if (!localStorage.getItem('persona_list')) {
	localStorage.setItem('persona_list', JSON.stringify({
		"persona_list": [{
			"Persona_Name": "Girlfriend", "Last_Chat": "2023-01-23T12:13:39.231Z", "Icon_Url": ""
		}, {
			"Persona_Name": "Best Friend", "Last_Chat": "2024-03-29T12:13:39.231Z", "Icon_Url": ""
		}]
	}));
}

// add chat_list

// {
//     "chat_list": [
//         {
//             "ID": "conv_1",
//             "Game_Name": "Apex Legends",
//             "AI_Persona": "Best Friend",
//             "Goal": "Complete the breakout challenge",
//             "Summary": "Completing the breakout challenge in Apex Legends. The user is stuck on the last level and needs help."
//         },
//         {
//             "ID": "conv_2",
//             "Game_Name": "Minecraft",
//             "AI_Persona": "Girlfriend",
//             "Goal": "Build train network",
//             "Summary": "Building train network from iron factory to home base through nether."
//         }
//     ]
// }
if (!localStorage.getItem('chat_list')) {
	localStorage.setItem('chat_list', JSON.stringify({
		"chat_list": [{
			"ID": "conv_1",
			"Game_Name": "Apex Legends",
			"AI_Persona": "Best Friend",
			"Goal": "Complete the breakout challenge",
			"Last_Chat": "2023-01-23T12:13:39.231Z",
			"Title": "Apex Legends: Complete the breakout challenge",
			"Summary": "Completing the breakout challenge in Apex Legends. The user is stuck on the last level and needs help.",
			"Summary_Date": "2023-01-23T12:13:29.231Z"
		}, {
			"ID": "conv_2",
			"Game_Name": "Minecraft",
			"AI_Persona": "Girlfriend",
			"Goal": "Build train network",
			"Last_Chat": "2023-01-23T12:13:39.231Z",
			"Title": "Minecraft: Build train network",
			"Summary": "Building train network from iron factory to home base through nether.",
			"Summary_Date": "2023-01-23T12:13:29.231Z"
		}]
	}));
}

// add chat history

// {
//     "ID": "conv_1",
// 	   "AI_Persona": "Best Friend",
//	   "Title": "Apex Legends: Complete the breakout challenge",
//     "Chat_History": [
//         {
//             "role": "system",
//             "content": "You are the user's Girlfriend and a helpful assistant with their video game \"Minecraft\"."
//         },
//         {
//             "role": "user",
//             "content": "Who won the world series in 2020?"
//         },
//         {
//             "role": "Girlfriend",
//             "content": "Who won the world series in 2020?"
//         },
//         {
//             "role": "user",
//             "content": "Who won the world series in 2020?"
//         }
//     ]
// }
if (!localStorage.getItem('conv_1')) {
	localStorage.setItem('conv_1', JSON.stringify({
		"ID": "conv_1", 
		"AI_Persona": "Best Friend",
		"Game_Name": "Apex Legends",
		"Goal": "Complete the breakout challenge",
		"Title": "Apex Legends: Complete the breakout challenge",
		"Chat_History": [{
			"role": "system",
			"content": "You are the user's Best Friend and a helpful assistant with their video game \"Apex Legends\"."
		}, {
			"role": "user", "content": "I want to complete the breakout challenge in Apex Legends."
		}, {
			"role": "Best Friend", "content": "Sure! I can help you with that. What level are you stuck on?"
		}, {
			"role": "user", "content": "I am stuck on the last level."
		}, {
			"role": "Best Friend", "content": "I know that level. Let me guide you through it."
		}]
	}));
}

if (!localStorage.getItem('conv_2')) {
	localStorage.setItem('conv_2', JSON.stringify({
		"ID": "conv_2",
		"AI_Persona": "Girlfriend",
		"Game_Name": "Minecraft",
		"Goal": "Build train network",
		"Title": "Minecraft: Build train network",
		"Chat_History": [{
			"role": "system",
			"content": "You are the user's Girlfriend and a helpful assistant with their video game \"Minecraft\"."
		}, {
			"role": "user", "content": "I want to build a train network in Minecraft."
		}, {
			"role": "Girlfriend",
			"content": "That sounds like a fun project. Where do you want to build the train network?"
		}, {
			"role": "user", "content": "I want to build it from the iron factory to the home base through the nether."
		}, {
			"role": "Girlfriend", "content": "That's an interesting route. Let's plan it out."
		}]
	}));
}