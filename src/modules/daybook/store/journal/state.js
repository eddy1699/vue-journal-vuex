export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Nulla eiusmod exercitation pariatur in ea sit aliquip culpa reprehenderit. Sit nostrud laborum mollit consequat minim ea. Occaecat velit dolor anim amet occaecat fugiat anim reprehenderit qui adipisicing sunt culpa culpa.",
      picture: null,
    },
    {
        id: new Date().getTime()+1000,
        date: new Date().toDateString(),
        text: "Sint dolore aute aliqua voluptate qui sunt.",
        picture: null,
      },
  ],
});
