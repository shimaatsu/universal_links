import SafariServices;

let url = URL(string:"https://shimaatsu.github.io/universal_links/")
if let url = url{
    let vc = SFSafariViewController(url: url)
    present(vc, animated: true, completion: nil)
}
