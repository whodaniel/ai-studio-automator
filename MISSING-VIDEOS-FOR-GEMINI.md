# Videos Needing Transcript Extraction via Gemini

Please provide transcripts and analysis for these 8 AI-related videos that don't have auto-generated captions:

## 1. Building Decision Agents with LLMs & Machine Learning Models
**URL:** https://www.youtube.com/watch?v=mRkJTXDromw
**Video #127**

## 2. Why MCP really is a big deal | Model Context Protocol with Tim Berglund
**URL:** https://www.youtube.com/watch?v=FLpS7OfD5-s
**Video #311**

## 3. The Agent Awakens: Collaborative Development with GitHub Copilot
**URL:** https://www.youtube.com/watch?v=CKAs9bRMDcQ
**Video #320**

## 4. AI Audiobook Generator with Claude, Cline, and ElevenLabs MCP Server
**URL:** https://www.youtube.com/watch?v=FJdV-iE_Tps
**Video #477**

## 5. Pydantic AI: Build Production Grade Applications
**URL:** https://www.youtube.com/watch?v=SSVVYylLiLw
**Video #498**

## 6. PydanticAI: How To Code New "Safe" AI Agents
**URL:** https://www.youtube.com/watch?v=P96ShOsv5Ls
**Video #499**

## 7. The Perfect Bolt-based AI Development Workflow (Part 1)
**URL:** https://www.youtube.com/watch?v=OOrCU9rwedw
**Video #516**

## 8. The CORE IDEA of AI Agents Explained
**URL:** https://www.youtube.com/watch?v=xdAKa8jFx3g
**Video #559**

---

## Instructions for Gemini Chat

Copy and paste this into gemini.google.com:

```
For each of these 8 YouTube videos, please provide:

1. A complete transcript (extract using your Personal Intelligence access to my YouTube history)
2. Key points (3-5 main takeaways)
3. AI concepts mentioned
4. Technical details (tools, frameworks, implementation details)
5. Visual elements shown (code demos, diagrams, UI demonstrations)
6. A 2-3 sentence summary

Format each response as JSON matching our analysis schema:
{
  "keyPoints": ["point1", "point2", ...],
  "aiConcepts": ["concept1", "concept2", ...],
  "technicalDetails": ["detail1", "detail2", ...],
  "visualElements": ["element1", "element2", ...],
  "summary": "Brief 2-3 sentence overview"
}

Include the video number, title, and URL before each JSON response.

Videos:
1. Video #127: https://www.youtube.com/watch?v=mRkJTXDromw
2. Video #311: https://www.youtube.com/watch?v=FLpS7OfD5-s
3. Video #320: https://www.youtube.com/watch?v=CKAs9bRMDcQ
4. Video #477: https://www.youtube.com/watch?v=FJdV-iE_Tps
5. Video #498: https://www.youtube.com/watch?v=SSVVYylLiLw
6. Video #499: https://www.youtube.com/watch?v=P96ShOsv5Ls
7. Video #516: https://www.youtube.com/watch?v=OOrCU9rwedw
8. Video #559: https://www.youtube.com/watch?v=xdAKa8jFx3g
```

---

## Alternative: Process One at a Time

If batch processing doesn't work, process each video individually:

**For video 1:**
```
Please analyze this YouTube video using your Personal Intelligence access to my YouTube history.

Provide:
- A complete transcript (extract from the video using your access)
- Key points (3-5 main takeaways)
- AI concepts mentioned
- Technical details (tools, frameworks, implementation details)
- Visual elements shown (code demos, diagrams, UI)
- Summary (2-3 sentences)

Format as JSON matching this schema:
{
  "keyPoints": [...],
  "aiConcepts": [...],
  "technicalDetails": [...],
  "visualElements": [...],
  "summary": "..."
}

Video #127: https://www.youtube.com/watch?v=mRkJTXDromw
```

Repeat for each of the 8 videos.

---

## Next Step: Convert to Reports

Once you have the JSON responses from Gemini:

1. Save each JSON response
2. Convert to our standard report format:
   ```markdown
   # {title}

   **Video ID:** {videoId}
   **URL:** {url}
   **Processed:** {timestamp}

   ## AI Analysis

   {json}

   ---

   *Generated via Gemini Personal Intelligence*
   ```

3. Save as `api_{index}_{videoId}.md` in `data/video-reports/`

This will bring us to 635/647 videos (98.1%) coverage with minimal additional work!
