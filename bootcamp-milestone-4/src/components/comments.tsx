type IComment = {
  user: string;
  comment: string;
  date: Date;
};

type CommentProps = {
  comment: IComment;
};

function Comment({ comment }: CommentProps) {
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
      <h4 style={{ margin: "0", fontWeight: "bold" }}>{comment.user} </h4>
      <p style={{ margin: "5px 0" }}>{comment.comment}</p>
      <span style={{ fontSize: "0.8em", color: "gray" }}>
        {new Date(comment.date).toLocaleDateString()}
      </span>
    </div>
  );
}

export default Comment;
