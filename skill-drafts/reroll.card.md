# Card text for /reroll (released 2026-11-24, approved by Jakob)

Summary line: Asks again in a new chat that never saw the first answer

Paragraph 1: When an answer misses, asking again in the same chat starts from the model's own first attempt, so the new answer is shaped by it (it avoids it or circles around it). **This skill hands your own request, word for word, to a brand-new session that has never seen the rejected answer**, so you get an independent second attempt.

Paragraph 2: It never summarizes or comments on the earlier answer. `/reroll 2` or `/reroll 3` starts that many parallel attempts, `/reroll different` tells the new session that an earlier answer was rejected (never what it said) and asks it to avoid the most obvious choices, and a model name such as `/reroll sonnet` picks the model. Any other text is added as a note.

Paragraph 3: The separate session needs the Claude Code desktop app. Everywhere else it copies the prompt to your clipboard or prints it, and you paste it into a new chat yourself. Start it with `/reroll`, or say "reroll" or "ask a fresh chat".
