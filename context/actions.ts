export async function GetQuizzes(sbj: string) {
  const res = await fetch("/api/get-quiz-state", {
    method: "POST",
    headers: {
      "content-type": "application-json",
    },
    body: JSON.stringify({ selectedSubject: sbj }),
  });
  return res;
}

export async function NewQuiz(subject: string) {
  const res = await fetch("/api/new-subject", {
    method: "POST",
    headers: {
      "content-type": "application-json",
    },
    body: JSON.stringify(subject),
  });
  return res;
}

export async function DeleteQuiz(id: string) {
  const res = await fetch("/api/delete-subject", {
    method: "POST",
    headers: {
      "content-type": "application-json",
    },
    body: JSON.stringify({ id }),
  });
  return res;
}
