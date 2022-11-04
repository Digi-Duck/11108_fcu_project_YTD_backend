<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;

class BlogController extends Controller
{
    public function blog(){
        $blog = Blog::get();
        $header = '部落格管理';
        $slot = '';
        return view('backend.blog.backend_blog', compact('blog','slot','header'));
    }

    public function edit($id){
        $blog = Blog::find($id);
        $header = '編輯留言';
        $slot = '';
        return view('backend.blog.edit', compact('blog','slot','header'));
    }

    public function update(Request $request,$id){
        $blog = Blog::find($id);
        $blog->title = $request->title;
        $blog->content = $request->content;
        $blog->save();

        return redirect('/admin/blog');
    }

    public function delete($id){
        Blog::find($id)->delete();
        return redirect('/admin/blog');
    }
}
