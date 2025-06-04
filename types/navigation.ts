export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
  };


  export type ChildStackParamList = {
    ChildDashboard: undefined;
    ChildBookpage: undefined;
    BookDetail: { bookId: string };
    ChildVideopage: undefined;
    VideoDetail: { videoId: string };
    QuizPage: undefined;
    QuizStart: { quizid: string };
    AssignmentsPage: undefined;
  };
  