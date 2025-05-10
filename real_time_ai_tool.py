import streamlit as st
from transformers import pipeline

@st.cache_resource
def load_summarizer():
    return pipeline("summarization", model="t5-small")

@st.cache_resource
def load_translator():
    return pipeline("translation_en_to_fr", model="t5-small")

@st.cache_resource
def load_sentiment_analyzer():
    return pipeline("sentiment-analysis")

summarizer = load_summarizer()
translator = load_translator()
sentiment_analyzer = load_sentiment_analyzer()

st.title("Real-Time AI Text Tool")
st.write("Enter your text and choose an AI function:")

input_text = st.text_area("Input Text", height=200)
task = st.radio("Choose an AI Task", ["Summarize", "Translate to French", "Sentiment Analysis"])

if st.button("Run"):
    if input_text.strip():
        with st.spinner("Processing..."):
            if task == "Summarize":
                result = summarizer(input_text, max_length=80, min_length=20, do_sample=False)[0]['summary_text']
                st.subheader("Summary:")
                st.success(result)

            elif task == "Translate to French":
                result = translator(input_text, max_length=100)[0]['translation_text']
                st.subheader("French Translation:")
                st.success(result)

            elif task == "Sentiment Analysis":
                result = sentiment_analyzer(input_text)[0]
                st.subheader("Sentiment:")
                st.success(f"{result['label']} ({result['score']:.2f})")
    else:
        st.warning("Please enter some text.")