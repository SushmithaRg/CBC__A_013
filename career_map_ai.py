import openai

openai.api_key = 'YOUR_OPENAI_API_KEY'

def generate_career_map(user_input):
    prompt = f"""
    Based on the following profile:
    Education: {user_input['education']}
    Skills: {user_input['skills']}
    Interests: {user_input['interests']}
    Goals: {user_input['goals']}

    Create a step-by-step career path with key milestones, roles, and skills needed for each step.
    """

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are an expert career counselor AI."},
            {"role": "user", "content": prompt}
        ]
    )
    return response['choices'][0]['message']['content']