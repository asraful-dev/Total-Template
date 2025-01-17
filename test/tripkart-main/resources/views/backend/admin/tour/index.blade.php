@extends('layouts.backend')
@section('content')
<!-- Content Wrapper -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Tours</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Tours</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

     <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- Page Heading -->
        <h1 class="h3 mb-2 text-gray-800 text-right">
            <a href="{{ route('tour.create') }}" class="btn btn-primary"><i class="fas fa-plus" aria-hidden="true"></i> Create</a>
        </h1>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header d-flex">
                <h3 class="card-title">Tours List</h3>
                <span class="badge badge-success rounded-pill ml-2" style="font-size: 17px;"> {{ count($tours) }} </span>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Sl</th>
                    <th>Image</th>
                    <th>Country</th>
                    <th>Tour View</th>
                    <th>Tour Day</th>
                    <th>Tour Price</th>
                    <th>Discount Price</th>
                    <th>Description</th>
                    <th>Popular</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                    @foreach($tours as $key => $item)
                      <tr>
                        <td> {{ $key+1}} </td>
                        <td class="col-2">
                          <img src="{{ asset($item->image) }}" class="justify-content-center" width="80px" height="70px;" alt="No Image">
                        </td>
                        <td>{{ $item->tour_country ?? 'NULL' }}</td>
                        <td>{{ $item->views ?? 'NULL' }}</td>
                        <td>{{ $item->tour_day ?? 'NULL' }}</td>
                        <td style="font-weight: bold;">৳{{ number_format($item->regular_price, 2) }}</td>
                        <td>
                            @if($item->discount_price > 0)
                                @if($item->discount_type == 1)
                                    <span class="badge rounded-pill bg-info text-white">৳{{ $item->discount_price }} off</span>
                                @elseif($item->discount_type == 2)
                                    <span class="badge rounded-pill bg-success text-white">{{ $item->discount_price }}% off</span>
                                @endif
                            @else
                            <span class="badge rounded-pill bg-danger text-white">No Discount</span>
                            @endif
                        </td>
                        <td class="col-2">
                          <?php $des =  strip_tags(html_entity_decode($item->description))?>
                          {{ Str::limit($des, $limit = 30, $end = '. . .') }}
                        </td>
                        <td>
                          @if($item->is_popular == 1)
                           <a href="#" class="badge badge-success">Active</a>
                           @else
                             <a href="#" class="badge badge-danger">Disable</a>
                           @endif
                        </td>
                      <td>
                         @if($item->status == 1)
                          <a href="{{ route('tour.in_active',['id'=>$item->id]) }}" class="badge badge-success">Active</a>
                          @else
                            <a href="{{ route('tour.active',['id'=>$item->id]) }}" class="badge badge-danger">Disable</a>
                          @endif
                       </td>
                      <td class="col-5">
                        <a href="{{ route('tour.view',$item->id) }}" class="btn btn-success btn-sm"><i class="fas fa-eye"></i></a>

                        <a href="{{ route('tour.edit',$item->id) }}" class="btn btn-primary btn-sm"><i class="fas fa-edit"></i></a>

                        <a href="{{ route('tour.delete',$item->id) }}"class="btn btn-danger btn-sm" title="Delete Data" id="delete"><i class="fa fa-trash"></i></a>
                      </td>

                      </tr>
                    @endforeach
                  </tfoot>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
</div>
@endsection
