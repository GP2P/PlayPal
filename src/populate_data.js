// if empty, populate local storage with data

// add currentConversationID
if (!localStorage.getItem('currentConversationID')) {
	localStorage.setItem('currentConversationID', 'conv_1');
}

// add latestConversationID
if (!localStorage.getItem('latestConversationID')) {
	localStorage.setItem('latestConversationID', '2');
}

if (!localStorage.getItem('game_list')) {
	localStorage.setItem('game_list', JSON.stringify({
		"game_list": [{
			"Game_Name": "Minecraft", "Last_Played": "2024-04-03T18:25:43.511Z", "Icon_Url": ""
		}, {
			"Game_Name": "Apex Legends", "Last_Played": "2024-03-23T12:13:39.231Z", "Icon_Url": ""
		}, {
			"Game_Name": "Fortnite", "Last_Played": "2024-03-23T12:13:39.231Z", "Icon_Url": ""
		}, {
			"Game_Name": "Valorant", "Last_Played": "2024-03-23T12:13:39.231Z", "Icon_Url": "https://media.npr.org/assets/img/2020/05/07/valorant_jett_wide-a62d0cdd87d0edffbabda5a6efe7bb62e57554a5.jpg"
		}, {
			"Game_Name": "League of Legends", "Last_Played": "2024-03-23T12:13:39.231Z", "Icon_Url": ""
		}, {
			"Game_Name": "Overwatch", "Last_Played": "2024-03-23T12:13:39.231Z", "Icon_Url": ""
		}, {
			"Game_Name": "Call of Duty: Warzone", "Last_Played": "2024-03-23T12:13:39.231Z", "Icon_Url": ""
		}, {
			"Game_Name": "Among Us", "Last_Played": "2024-03-23T12:13:39.231Z", "Icon_Url": ""
		}, {
			"Game_Name": "Genshin Impact", "Last_Played": "2024-03-23T12:13:39.231Z", "Icon_Url": ""
		}, {
			"Game_Name": "Cyberpunk 2077", "Last_Played": "2024-03-23T12:13:39.231Z", "Icon_Url": ""
		}]
	}));
}

if (!localStorage.getItem('persona_list')) {
	localStorage.setItem('persona_list', JSON.stringify({
		"persona_list": [{
			"Persona_Name": "AI Boyfriend", "Last_Chat": "2023-01-23T12:13:39.231Z", "Icon_Url": ""
		}, {
			"Persona_Name": "AI Buddy", "Last_Chat": "2024-03-29T12:13:39.231Z", "Icon_Url": ""
		}, {
			"Persona_Name": "AI Coach", "Last_Chat": "2023-01-23T12:13:39.231Z", "Icon_Url": ""
		}, {
			"Persona_Name": "AI Friend", "Last_Chat": "2024-03-29T12:13:39.231Z", "Icon_Url": ""
		}, {
			"Persona_Name": "AI Girlfriend", "Last_Chat": "2023-01-23T12:13:39.231Z", "Icon_Url": ""
		}]
	}));
}

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
		}, {
			"ID": "conv_3",
			"Game_Name": "Overwatch",
			"AI_Persona": "AI Coach",
			"Goal": "Improve sniper skills",
			"Last_Chat": "2024-04-01T12:13:39.231Z",
			"Title": "Overwatch: Improve sniper skills",
			"Summary": "The user wants to improve sniper skills in Overwatch",
			"Summary_Date": "2024-04-01T12:13:29.231Z"
		}, {
			"ID": "conv_4",
			"Game_Name": "Valorant",
			"AI_Persona": "AI Buddy",
			"Goal": "Reach Diamond rank",
			"Last_Chat": "2024-04-02T12:13:39.231Z",
			"Title": "Valorant: Reach Diamond rank",
			"Summary": "The user aims to reach Diamond rank in Valorant",
			"Summary_Date": "2024-04-02T12:13:29.231Z"
		},  {
			"ID": "conv_5",
			"Game_Name": "Genshin Impact",
			"AI_Persona": "AI Friend",
			"Goal": "Complete all quests",
			"Last_Chat": "2024-04-03T12:13:39.231Z",
			"Title": "Genshin Impact: Complete all quests",
			"Summary": "The user wants to complete all quests in Genshin Impact",
			"Summary_Date": "2024-04-03T12:13:29.231Z"
		}, {
			"ID": "conv_6",
			"Game_Name": "Call of Duty: Warzone",
			"AI_Persona": "AI Strategist",
			"Goal": "Win the battle royale",
			"Last_Chat": "2024-04-04T12:13:39.231Z",
			"Title": "Call of Duty: Win the battle royale",
			"Summary": "The user plans to win the battle royale in Call of Duty: Warzone",
			"Summary_Date": "2024-04-04T12:13:29.231Z"
		}]
	}));
}


if (!localStorage.getItem('conv_1')) {
	localStorage.setItem('conv_1', JSON.stringify({
		"ID": "conv_1", 
		"AI_Persona": "Best Friend",
		"Game_Name": "Apex Legends",
		"Goal": "Complete the breakout challenge",
		"Title": "Apex Legends: Complete the breakout challenge",
		"Summary": "The user wants to complete the breakout challenge in Apex Legends",
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
		"Summary": "The user wants to build a train network in Minecraft",
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

if (!localStorage.getItem('conv_3')) {
	localStorage.setItem('conv_3', JSON.stringify({
		"ID": "conv_3",
		"AI_Persona": "AI Coach",
		"Game_Name": "Overwatch",
		"Goal": "Improve sniper skills",
		"Title": "Overwatch: Improve sniper skills",
		"Summary": "The user wants to improve sniper skills in Overwatch",
		"Chat_History": [
			{
				"role": "system",
				"content": "You are the user's AI Coach and a helpful assistant with their video game \"Overwatch\"."
			},
			{
				"role": "user",
				"content": "I need help improving my sniper skills."
			},
			{
				"role": "AI Coach",
				"content": "Absolutely! Let's start by focusing on your positioning. Where do you usually position yourself during a match?"
			},
			{
				"role": "user",
				"content": "I'm not sure where the best spots are."
			},
			{
				"role": "AI Coach",
				"content": "Let me show you some common sniper spots and techniques to help you get better shots."
			}
		]
	}
	));
}

if (!localStorage.getItem('conv_4')) {
	localStorage.setItem('conv_4', JSON.stringify(
		{
			"ID": "conv_4",
			"AI_Persona": "AI Buddy",
			"Game_Name": "Valorant",
			"Goal": "Reach Diamond rank",
			"Title": "Valorant: Reach Diamond rank",
			"Summary": "The user aims to reach Diamond rank in Valorant",
			"Chat_History": [
				{
					"role": "system",
					"content": "You are the user's AI Buddy and a supportive assistant for their Valorant gameplay."
				},
				{
					"role": "user",
					"content": "I want to reach Diamond rank this season."
				},
				{
					"role": "AI Buddy",
					"content": "That's a great goal! Let's review your recent matches and see what improvements can be made."
				},
				{
					"role": "user",
					"content": "Sounds good, what should I focus on first?"
				},
				{
					"role": "AI Buddy",
					"content": "First, let's work on your aiming and tactical positioning. We'll start with some drills."
				}
			]
		}
		
	));
}

if (!localStorage.getItem('conv_5')) {
	localStorage.setItem('conv_5', JSON.stringify(
		{
			"ID": "conv_5",
			"AI_Persona": "AI Friend",
			"Game_Name": "Genshin Impact",
			"Goal": "Complete all quests",
			"Title": "Genshin Impact: Complete all quests",
			"Summary": "The user wants to complete all quests in Genshin Impact",
			"Chat_History": [
				{
					"role": "system",
					"content": "You are the user's AI Friend, here to assist with the game \"Genshin Impact\"."
				},
				{
					"role": "user",
					"content": "I'm overwhelmed with the number of quests. Where should I start?"
				},
				{
					"role": "AI Friend",
					"content": "Let's prioritize the quests that give you the most rewards. I'll help you organize them."
				},
				{
					"role": "user",
					"content": "That would be helpful, thanks!"
				},
				{
					"role": "AI Friend",
					"content": "No problem! Let's get started by listing the quests you currently have open."
				}
			]
		}
		
	));
}

if (!localStorage.getItem('conv_6')) {
	localStorage.setItem('conv_6', JSON.stringify(
		{
			"ID": "conv_6",
			"AI_Persona": "AI Strategist",
			"Game_Name": "Call of Duty: Warzone",
			"Goal": "Win the battle royale",
			"Title": "Call of Duty: Win the battle royale",
			"Summary": "The user plans to win the battle royale in Call of Duty: Warzone",
			"Chat_History": [
				{
					"role": "system",
					"content": "You are the user's AI Strategist, here to help win the battle royale in \"Call of Duty: Warzone\"."
				},
				{
					"role": "user",
					"content": "I keep getting eliminated early in the game. What can I do?"
				},
				{
					"role": "AI Strategist",
					"content": "Let's focus on improving your initial looting strategies and choosing better landing spots."
				},
				{
					"role": "user",
					"content": "Okay, where should I land next game?"
				},
				{
					"role": "AI Strategist",
					"content": "I'll suggest a few lower-risk areas where you can gear up safely before engaging enemies."
				}
			]
		}
		
	));
}
