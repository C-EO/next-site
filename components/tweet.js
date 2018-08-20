export default ({ id }) =>
  <div className="tweet">
    <style jsx>{`
      .tweet {
        display: inline-block;
        width: 400px;
        margin: 0 1rem;
        padding: 1.5rem 1rem;
        // box-shadow: 0 10px 20px rgba(0, 0, 0, .15);
        border-radius: 5px;
        border: 1px solid #ddd;
        transition: all .2s ease;
        font-weight: 400;
        white-space: normal;
      }
      .avatar:before {
        content: "";
        display: inline-block;
        margin-right: 1rem;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        vertical-align: middle;
        background-image: url(https://pbs.twimg.com/profile_images/1015667079968624640/LBczDa8q_bigger.jpg);
        background-size: cover;
      }
      .avatar > div {
        display: inline-block;
        vertical-align: middle;
      }
      .name {
        font-size: 16px;
        font-weight: 500;
      }
      .avatar {
        margin-bottom: 1rem;
      }
      .content {
        line-height: 1.4rem;
        font-size: 14px;
      }
    `}</style>
    <div className="avatar">
      <div>
        <div className="name">Jeremy Hindle</div>
        <div className="handle">@Mentioum</div>
      </div>
    </div>
    <div className="content">
      Really enjoying nextjs -> node server -> @prisma server -> MySQL | ( looking forward to @CockroachDB, @elastic , and @dgraphlabs )  - I feel like its becoming easier and easier to build multifunction applications every single year.
    </div>
  </div>