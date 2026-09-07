from textblob import TextBlob

def analyze_sentiment(text):
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity

    if polarity > 0.1:
        label = "positive"
    elif polarity < -0.1:
        label = "negative"
    else:
        label = "neutral"

    return {"text": text, "polarity": round(polarity, 2), "label": label}


def analyze_batch(posts):
    results = [analyze_sentiment(p) for p in posts]

    total = len(results)
    counts = {"positive": 0, "negative": 0, "neutral": 0}
    for r in results:
        counts[r["label"]] += 1

    percentages = {k: round(v / total * 100, 1) for k, v in counts.items()}

    return {"results": results, "summary": percentages}