export default function Footer() {
  const today = new Date();
  return (
    <footer className="footer">
      <p>Copyright &copy;{today.getFullYear()}</p>
      <h6>Contact Us: DevPipeline- 518 E 800 N- Orem, UT</h6>
      <h6>(801)255-6698</h6>
    </footer>
  );
}
