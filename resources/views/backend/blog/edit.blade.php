@extends('layouts.app')
@section('css')
    <!-- include libraries(jQuery, bootstrap) -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <!-- include summernote css/js -->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
    <style>
        table {
            width: 80%;
            text-align: center;
            margin-left: 50%;
            transform: translate(-50%, 0);
        }

        th,
        td {
            border: 1px solid black;
        }

        img {
            width: 200px;
        }

        .create-btn {
            color: white;
            background-color: green;
            display: inline-block;
            margin-block: 30px
        }

        .edit-btn {
            color: white;
            background-color: skyblue;
            display: inline-block;
            margin-block: 30px
        }

        .delete-btn {
            color: white;
            background-color: crimson;
            display: inline-block;
            margin-block: 30px
        }
    </style>
@endsection

@section('main')
    <form action="/admin/blog/update/{{ $blog->id }}" method="POST">
        @csrf
        <table style="border:1px solid black">
            <thead>
                <tr>
                    <th>標題</th>
                    <th>內容</th>
                    <th>圖片</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" name="title" required value="{{ $blog->title }}"></td>
                    <td>
                        <textarea name="content" id="hello" cols="30" rows="3" required>"{!!$blog->content!!}"</textarea>
                    </td>
                    <td><input type="text" name="pic_path" required value="{{ $blog->pic_path }}"></td>
                    <td>
                        <button type="submit" class="create-btn font-bold py-2 px-4 border rounded">確定修改</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
    <script>
        $(document).ready(function() {
            $('#hello').summernote();
        });
    </script>
@endsection
